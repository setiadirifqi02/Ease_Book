type AppProps = {
  inputs: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    city: string;
    password: string;
  };
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
};

export default function AuthModalInput({
  inputs,
  onChangeHandler,
  isSignIn,
}: AppProps) {
  return (
    <div className="auth___input">
      {isSignIn ? null : (
        <div className="my-2 flex justify-between">
          <input
            type="text"
            placeholder="First name"
            className="input input-bordered input-primary input-md w-[49%]"
            value={inputs.firstName}
            onChange={onChangeHandler}
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-primary input-md w-[49%]"
            value={inputs.lastName}
            onChange={onChangeHandler}
            name="lastName"
          />
        </div>
      )}
      <input
        type="text"
        placeholder="Email"
        className="input input-bordered input-primary my-2 input-md w-full"
        value={inputs.email}
        onChange={onChangeHandler}
        name="email"
      />
      {isSignIn ? null : (
        <input
          type="text"
          placeholder="Phone"
          className="input input-bordered input-primary my-2 input-md w-full"
          value={inputs.phone}
          onChange={onChangeHandler}
          name="phone"
        />
      )}
      {isSignIn ? null : (
        <input
          type="text"
          placeholder="City"
          className="input input-bordered input-primary my-2 input-md w-full"
          value={inputs.city}
          onChange={onChangeHandler}
          name="city"
        />
      )}
      <input
        type="password"
        placeholder="Password"
        className="input input-bordered input-primary my-2 input-md w-full"
        value={inputs.password}
        onChange={onChangeHandler}
        name="password"
      />
    </div>
  );
}
