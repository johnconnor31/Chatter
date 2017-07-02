Rails.application.routes.draw do
  get 'reactitem/index'

  get 'react_item/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
  	namespace :v1 do 
  		resources :items,only:[:create,:update,:index,:destroy]
	end
  end
  namespace :api do
    namespace :v1 do 
      resources :users,only:[:create,:update,:index,:destroy]
  end
  end
  namespace :api do
    namespace :v1 do 
      resources :chatmsgs,only:[:create,:update,:index,:destroy],defaults: { format: 'json' }
  end
   end
   root to: 'reactitem#index'
end
