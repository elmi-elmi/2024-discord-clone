import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      This is protected route!
      <UserButton />
    </div>

  );
}