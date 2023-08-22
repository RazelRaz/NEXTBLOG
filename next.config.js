/** @type {import('next').NextConfig} */
const nextConfig = {

    async headers(){
        return [
            {
                source:'/:path*',
                headers:[
                    {
                        key:'X-Frame-Options',
                        value:'DENY'
                    }
                ]
            }
        ]
    }

}

module.exports = nextConfig
