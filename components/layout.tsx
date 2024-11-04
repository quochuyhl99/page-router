export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>this is my custom layout</h1>
            <main>{children}</main>
        </>
    );
}
