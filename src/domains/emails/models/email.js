module.exports = () => ({
    to: to => ({
        from: from => ({
            subject: subject => ({
                message: message => ({
                    from,
                    html: message,
                    subject,
                    to,
                }),
            }),
        }),
    }),
})
