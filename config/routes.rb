Rails.application.routes.draw do
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users 
    resource :session, only: [:new, :create, :destroy]
    resources :tracks, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:index, :create, :update, :destroy] 

    post '/likes/toggle_like' => 'likes#toggle_like'
    get '/likes/:user_id' => 'likes#liked_tracks'
    
    get '/tracks/artist_tracks/:artist_id' => 'tracks#artist_tracks'
    get '/tracks/search_tracks/:search_string' => 'tracks#search_string'

    get '/comments/track_comments/:track_id' => 'comments#track_comments'
  end
end
