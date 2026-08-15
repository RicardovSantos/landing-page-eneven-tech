FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY assets /usr/share/nginx/html/assets
COPY robots.txt /usr/share/nginx/html/robots.txt
COPY sitemap.xml /usr/share/nginx/html/sitemap.xml
COPY llms.txt /usr/share/nginx/html/llms.txt

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
