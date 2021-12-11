```bash
docker run -d -p 27017:27017 -v /home/ilvor/Projects/Docker/mongodb:/data/db --name mongodb -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=17goREAL -e MONGO_INITDB_DATABASE=fabler mongo
```
