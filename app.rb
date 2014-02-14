require 'sinatra'

set :server, %[thin]

get '/' do
  @title = 'Prototyping Skeleton'
  erb :index
end