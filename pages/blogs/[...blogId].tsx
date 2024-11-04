import NestedLayout from "@/components/nested-layout";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

type Repo = {
    name: string;
    stargazers_count: number;
};

export const getStaticPaths = (async () => {
    return {
        paths: [
            {
                params: {
                    blogId: ["blog-1"],
                },
            }, // See the "paths" section below
        ],
        fallback: true, // false or "blocking"
    };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
    const res = await fetch("https://api.github.com/repos/vercel/next.js");
    const repo = await res.json();
    return { props: { repo } };
}) satisfies GetStaticProps<{ repo: Repo }>;

const BlogDetailPage: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ repo }) => {
    const router = useRouter();
    const blogId = router.query.blogId;
    useEffect(() => {
        console.log("isReady: ", router.isReady);
        console.log("basePath: ", router.basePath);
    }, [router.isReady]);

    return (
        <>
            <div>blog detail {blogId}</div>
            <div>pathname: {router.pathname}</div>
            <div>basePath: {router.basePath}</div>
            <div>asPath: {router.asPath}</div>
            <div>locale: {router.locale}</div>
            <br />
            <div>repo name: {repo.name}</div>
        </>
    );
};
BlogDetailPage.getLayout = function getLayout(page: ReactElement) {
    return <NestedLayout>{page}</NestedLayout>;
};
export default BlogDetailPage;
