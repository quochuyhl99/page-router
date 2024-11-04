import useSWR from "swr";

export default function NestedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data, error } = useSWR("/api/hello", (url) =>
        fetch(url).then((r) => r.json())
    );
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    console.log(data);
    return (
        <>
            <h2>this is my NestedLayout {data.name}</h2>
            <main>{children}</main>
        </>
    );
}
