Rails.application.routes.draw do
  get 'reactitem/index'

  get 'react_item/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
  	namespace :v1 do 
  		resources :items,only:[:create,:update,:index,:destroy]
	end
   end
   root to: 'reactitem#index'
end
