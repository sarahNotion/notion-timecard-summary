const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
  const databaseId = '6da92e83b47f46dd84e2be7573a199da';
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
          property: 'Date Completed',
          date: {
            is_not_empty: true,
          },
        },

    }
  });
  console.log(response);
})();
