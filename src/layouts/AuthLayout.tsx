import bgAuthSVG from "../assets/bgAuth.svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="authLayout">
      <div className="bgSection">
        <img src={bgAuthSVG} alt="Background" />
      </div>
      <div className="authPages">{children}</div>
    </div>
  );
}
