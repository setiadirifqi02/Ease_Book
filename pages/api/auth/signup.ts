import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcyrpt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { firstName, lastName, email, phone, city, password } = req.body;
    const errors: string[] = [];
    const validationSchema = [
      {
        valid: validator.isLength(firstName, { min: 1, max: 20 }),
        errorMessage: "FistName must be min 1 & max 20 character",
      },

      {
        valid: validator.isLength(lastName, { min: 1, max: 20 }),
        errorMessage: "LastName must be min 1 & max 20 character",
      },

      {
        valid: validator.isEmail(email),
        errorMessage: "Invalid Email",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "Invalid phone",
      },
      {
        valid: validator.isLength(city, { min: 1, max: 20 }),
        errorMessage: "City must be min 1 & max 30 character",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "password must contain capitalize, number and character ",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length) {
      return res.status(400).json({
        message: errors[0],
      });
    }

    const userEmailIsExist = await prisma.user.findUnique({
      where: { email },
    });

    if (userEmailIsExist) {
      return res.status(400).json({
        status: "failed",
        message: "Email is Already used",
      });
    }
    // console.log(userEmailIsExist);
    const encyptPassword = await bcyrpt.hash(password, 10);

    const newUserAccount = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        password: encyptPassword,
        email,
        city,
        phone,
      },
    });

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const alg = "HS256";

    const token = await new jose.SignJWT({ email: newUserAccount.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);
    setCookie("jwt", token, { req, res, maxAge: 60 * 60 * 24 });

    return res.status(202).json({
      firstName: newUserAccount.first_name,
      lastName: newUserAccount.last_name,
      email: newUserAccount.email,
      city: newUserAccount.city,
      phone: newUserAccount.phone,
    });
  }
  return res.status(404).json({
    staus: "Unknown endpoint",
  });
}
