
PathUtil <- list(
  concatPath = function(pathPart1, pathPart2) {
    separator <- "/"
    if (endsWith(pathPart1, separator)) {
      if (startsWith(pathPart2,separator)) {
        return (paste(pathPart1, substr(pathPart2, 2, nchar(pathPart2)), sep=""))
      } else {
        return (paste(pathPart1, pathPart2, sep=""))
      }
    } else {
      if (startsWith(pathPart2,separator)) {
        return (paste(pathPart1,pathPart2, sep=""))
      } else {
        return (paste(pathPart1,separator,pathPart2,sep=""));
      }
    }
  },
  concat = function(pathPart1, ...){
    for(part in list(...)){
      pathPart1 <- PathUtil$concatPath(pathPart1,part);
    }
    return(pathPart1)
  }
)



