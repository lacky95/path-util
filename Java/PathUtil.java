package at.gv.brz.bm.render_service_sdk.util;


/**
 * @author laknerl
 * @since 08.10.2018
 */
public class PathUtil {


    public static String concat(String pathPart1, String pathPart2) {
        char seperator = '/';
        if(pathPart1.contains("\\") && !pathPart1.contains("/")){
            seperator = '\\';
        }

        return concat(pathPart1,pathPart2,seperator);
    }

    public static String concat(String pathPart1, String pathPart2, char separator) {
        if (pathPart1.endsWith(String.valueOf(separator))) {
            if (pathPart2.startsWith(String.valueOf(separator))) {
                return new StringBuilder(pathPart1).append(pathPart2.substring(1)).toString();
            } else {
                return new StringBuilder(pathPart1).append(pathPart2).toString();
            }
        } else {
            if (pathPart2.startsWith(String.valueOf(separator))) {
                return new StringBuilder(pathPart1).append(pathPart2).toString();
            } else {
                return new StringBuilder(pathPart1).append(separator).append(pathPart2).toString();
            }
        }
    }

    public static String concat(String pathPart1, String... anotherPathPart){
        for(String part :anotherPathPart){
            pathPart1 = concat(pathPart1,part);
        }
        return pathPart1;
    }



}
