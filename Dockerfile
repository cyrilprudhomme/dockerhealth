FROM node AS BUILD
CMD ["ng", "build"]

FROM nginx
COPY --from=build ./www /usr/share/nginx/html
EXPOSE 80
