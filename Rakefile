desc 'Starts Sinatra app. Runs Grunt to handle assets.'
task :serve do
  puts 'Starting up Sinatra. Running Grunt tasks and watching for changes.'

  pids = [
    spawn('rerun ruby app.rb'),
    spawn('grunt'),
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end