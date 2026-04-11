export default async () => {
    let articles = {
        total: 0,
        items: [],
    };

    try {
        const now = new Date();
        const daysFromMonday = now.getUTCDay() === 0 ? 6 : now.getUTCDay() - 1;
        const monday = new Date(now);
        monday.setUTCDate(monday.getUTCDate() - daysFromMonday);
        monday.setUTCHours(0, 0, 0, 0);

        const url = new URL("https://newsapi.org/v2/top-headlines");
        url.searchParams.set("category", "technology");
        url.searchParams.set("language", "en");
        url.searchParams.set("pageSize", "100");

        const response = await fetch(url, {
            headers: { "X-Api-Key": process.env.NEWS_API_KEY}
        });

        const data = await response.json();

        if (data.status !== "ok") {
            console.error("NewsAPI error:", data.message);
            return articles;
        }

        const withImages = data.articles.filter(a => a.urlToImage);

        const reachable = await Promise.all(
            withImages.map(a =>
                fetch(a.urlToImage, { method: "HEAD" })
                    .then(r => r.ok)
                    .catch(() => false)
            )
        );

        articles.items = withImages.filter((_, i) => reachable[i]);
        articles.total = articles.items.length;
    } catch (error) {
        console.error(error);
    }

    return articles;
};