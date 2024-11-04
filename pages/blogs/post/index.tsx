import NestedLayout2 from "@/components/nested-layout2";
import { ReactElement } from "react";

export default function BlogIndex() {
    return <div>Blog page</div>;
}

BlogIndex.getLayout = function getLayout(page: ReactElement) {
    return <NestedLayout2>{page}</NestedLayout2>;
};
