
module.exports = {
    async redirects() {
        return [
            {
                source: '/about-me',
                destination: 'https://www.linkedin.com/in/asaecurry/',
                permanent: false,
            }
        ]
    }

}