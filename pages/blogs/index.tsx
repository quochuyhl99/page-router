import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BlogsPage = () => {
    const router = useRouter();

    useEffect(() => {
        // Always do navigations after the first render
        router.push("/blogs/?counter=10", undefined, { shallow: true });
    }, []);

    useEffect(() => {
        console.log("countter change");
    }, [router.query.counter]);

    return (
        <>
            <div>BlogsPage</div>
            <br />
            <Link href="/blogs/first-post">first-post</Link>
            <br />
            <Link href="/blogs/blog-1">blog-1</Link>
        </>
    );
};

export default BlogsPage;
