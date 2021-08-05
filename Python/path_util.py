
def concatS(pathPart1, pathPart2, separator):

    if(pathPart1 == ""):
        return pathPart2


    if (pathPart1.endswith(separator)):
        if (pathPart2.startswith(separator)):
            return pathPart1 + pathPart2[1:]
        else:
            return pathPart1 +pathPart2

    else:
        if (pathPart2.startswith(separator)):
            return pathPart1+pathPart2
        else:
            return pathPart1+separator+pathPart2




def concat(*anotherPathPart):
    pathPart1 = ""
    for part in anotherPathPart:
        pathPart1 = concatAB(pathPart1,part)

    return pathPart1;


def concatAB(pathPart1, pathPart2) -> str:
    seperator = '/'

    if ("\\" in pathPart1 and not "/" in pathPart1):
        seperator = '\\'

    return concatS(pathPart1, pathPart2, seperator)