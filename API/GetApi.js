var GetApi = {
	template: `

<div style="text-align: center;">Your API is: {{posts}}</div>
	`
	,
    data: () => ({
    posts: [],
    errors: []
 }),
  	created() 	{
    axios.get('http://localhost/vue/api/connect.php?action=read').then(
    	response => {this.posts = response.data}).catch(e => {this.errors.push(e)})
    			}
}