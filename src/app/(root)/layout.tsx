import { onBoardUser } from "@/features/auth/actions";


export default async function RootGrouptLayout({
    children
}:Readonly<{
    children: React.ReactNode;
}>) {
    await onBoardUser();
    
    return children;
}