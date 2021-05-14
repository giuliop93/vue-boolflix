const app = new Vue({
    el: "#app",
    data: {
        movies: [],
        filteredMovie: [],
        searchText: ""
    },

    methods: {
        onInput() {
            console.log(this.searchText);

            var result;
            this.filteredContacts = []
            // Filtro a partire dall'array movies 
            this.movies.forEach((movie) => {
                let movieTitle = movie.title.toLowerCase();
                let searchedName = this.searchText.toLowerCase();
                if (movieTitle.includes(searchedName)) {
                    this.filteredMovies.push(movie)
                }
                //     // contact.visible = true;l
                // } else {
                //     contact.visible = false;
                // }            
            });
            console.log(this.filteredMovies);
        },        
        makeAxiosSearch(searchType) {
            const axiosOptions = {
                params: {
                    api_key: this.tmdbApiKey,
                    query: this.textToSearch,
                    language: ""
                }
            };
        }
    },
    mounted() {
            axios.get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: this.tmdbApiKey,
                    query:this.textToSearch,
                    language: ""
                }                
            }.then((resp) => {
                    console.log(resp)
                    this.movies = resp.data.results;
                    console.log(this.movies)
                })
            )}
})