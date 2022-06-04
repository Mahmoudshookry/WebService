const hateos = {
    getBlogsHateos: (scheme, hostname) => ({
        'self_url': `${scheme}${hostname}/blogs`,
        'blog_url':  `${scheme}${hostname}/blogs/{blog_id}`,
    })
}

module.exports = hateos