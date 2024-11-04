import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Repo = {
    name: string;
    stargazers_count: number;
};

export const getServerSideProps = (async () => {
    const res = await fetch("https://api.github.com/repos/vercel/next.js");
    const repo: Repo = await res.json();
    // Pass data to the page via props
    return { props: { repo } };
}) satisfies GetServerSideProps<{ repo: Repo }>;

export default function CustomTable({
    repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <div>Custom Table</div>
            <div>name: {repo.name}</div>
            <div>stargazers_count: {repo.stargazers_count}</div>
        </>
    );
}
