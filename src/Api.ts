import { User } from "./types";

/**
 * Класс для работы с API
 *
 * @author		User Name 
 * @version		v.1.0 (dd/mm/yyyy)
 */
class Api
{
    constructor() 
    {

    }


    /**
     * Заполняет строковый шаблон template данными из объекта object
     *
     * @author		User Name 
     * @version		v.1.0 (dd/mm/yyyy)
     * @param		{object} object
     * @param		{string} template
     * @return		{string}
     */
    get_api_path(object: User, template: string)
    {
        let result = '';
        result = template.replace(
        new RegExp('%([A-Za-z]+)%', 'g'), 
        (p1) => {
            return object[p1.replace(/%/g, '')]
        })
        return result;
    }
}

export default Api;