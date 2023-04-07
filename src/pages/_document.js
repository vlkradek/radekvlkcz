import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://api.fontshare.com/v2/css?f[]=red-hat-display@401,800,501,601,900,901,301,300,801,700,400,500,701,600&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://api.fontshare.com/v2/css?f[]=author@501,400,500,200,301,601,600,300,700,201,701,401&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://api.fontshare.com/v2/css?f[]=bespoke-sans@700,300,800,501,500,401,801,701,400,301&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://api.fontshare.com/v2/css?f[]=excon@400,900,700,500,300,100&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
