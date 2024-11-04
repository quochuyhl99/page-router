export default function NestedLayout2({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <h2>this is my NestedLayout 2</h2>
            <main>{children}</main>
        </>
    );
}
