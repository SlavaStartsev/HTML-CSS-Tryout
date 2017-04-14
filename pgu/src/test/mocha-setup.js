import m from 'module';
const originalLoader = m._load;

m._load = (request, parent, isMain) => {
  if (request.match(/.jpeg|.jpg|.png$/)) {
    return {uri: request};
  }

  return originalLoader(request, parent, isMain);
};