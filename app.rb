require 'sinatra'
require 'sinatra/activerecord'
require './config/environments' #database configuration
require './models/model'

set :server, %[thin]

get '/' do
  @title = 'Sinatra Starter Kit'
  erb :index
end