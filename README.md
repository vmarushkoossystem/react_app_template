# Requirements

There are:
- `node.js`: ^12.13 [link](https://tecadmin.net/install-nodejs-with-nvm/)
- `docker` (optional): ^19.03 [link](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-engine---community)

# Deployment
## Development mode
1\. Install dependencies:
```
npm i
```
2\. Build development app with watching and hot reload options using preinstalled server:
```
npm run start
```

3\. Open in the browser: [http://localhost:5000](http://localhost:5000)

## Production mode:

1\. Install additional module:
```
npm i -g serve
```

2\. Build production app:
```
npm run build 
```

3\. Run server:
```
serve -s -l tcp://0.0.0.0:5000 ./build
```

4\. Open in the browser: [http://localhost:5000](http://localhost:5000)


# Docker mode

1\. Execute from the root project folder:
```
sudo ./docker.sh
```

2\. Open in the browser: [http://localhost:5002](http://localhost:5002)
