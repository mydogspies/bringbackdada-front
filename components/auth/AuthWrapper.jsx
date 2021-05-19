import {useUser} from "@auth0/nextjs-auth0";
import {useRouter} from "next/router";

const AuthWrapper = (WrappedPage) => {

    return (props) => {

        if (typeof window !== "undefined") {
            const Router = useRouter();

            const user = useUser();
            if (!user.user) {
                Router.replace("/admin");
                return null;
            }

            return <WrappedPage {...props} />;
        }

        return null;
    };
}
