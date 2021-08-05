
class PathUtil{
  contains(str, anotherStr){
    return str.indexOf(anotherStr) !== -1
  }

  concat2(pathPart1, pathPart2) {
    let seperator = '/';
    if(this.contains(pathPart1,"\\") && !this.contains(pathPart1,"/")){
      seperator = '\\';
    }

    return this.concat2_s(pathPart1,pathPart2,seperator);
  }

  concat2_s(pathPart1, pathPart2, separator) {
    if (pathPart1.endsWith(''+separator)) {
      if (pathPart2.startsWith(''+separator)) {
        return pathPart1 += pathPart2.substring(1);
      } else {
        return pathPart1 += pathPart2;
      }
    } else {
      if (pathPart2.startsWith(''+separator)) {
        return pathPart1 += pathPart2;
      } else {
        return pathPart1 += separator + pathPart2;
      }
    }
  }

  concat(pathPart1, anotherPathParts){
    let args = Array.from(arguments);
    pathPart1 = args[0];

    args.splice(0,1);

    for(let part of args){
      pathPart1 = this.concat2(pathPart1,part);
    }
    return pathPart1;
  }

  concat_s(separator, pathPart1, anotherPathPart){
    let args = Array.from(arguments);
    separator = args[0];
    pathPart1 = args[1];

    args.splice(0,2);

    for(let part of args){
      pathPart1 = this.concat2_s(pathPart1, part, separator);
    }
    return pathPart1;
  }
}

export default (new PathUtil());

/*
// simple tests
let pathutil = new PathUtil();

console.log(pathutil.concat('hello/','/world','/two'))
console.log(pathutil.concat('hello/','world','/two'))
console.log(pathutil.concat_s('\\','world','two','foo','bar'))
*/


