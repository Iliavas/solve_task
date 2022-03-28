import Api from "./Api";
import { User } from "./types";

const user: User = {
	id		: 20,
	name	: 'John Dow',
	role	: 'QA',
	salary	: 100
};

const api_path_templates: string[] =
[
	"/api/items/%id%/%name%",
	"/api/items/%id%/%role%",
	"/api/items/%id%/%salary%"
];

const api = new Api();

const api_paths = api_path_templates.map((api_path_template) =>
{
	return api.get_api_path(user, api_path_template);
});

console.log(JSON.stringify(api_paths));
