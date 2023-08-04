/** @type {import('next').NextConfig} */

const nextConfig = {
// images:{
// domains:["res.cloudinary.com"]



// }





    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dfqypi2mh/image/upload/**',
          },
        ],
      },
    


}

module.exports = nextConfig
