import AuthModal from "../components/auth-modal";

export default function UiPage() {
  return (
    <div className="flex bg-blue-300 h-screen flex-col gap-4 items-center justify-center">
      <AuthModal isSignIn={true} />
      <AuthModal isSignIn={false} />
    </div>
  );
}
