desc 'Starts Sinatra app. Runs Grunt to handle assets.'
task :serve do
  puts 'Starting up Sinatra. Running Grunt tasks and watching for changes.'
    startSinatraPid = Process.spawn("rerun ruby app.rb")
    gruntWatchPid = Process.spawn("grunt")
    trap("INT") {
      [startSinatraPid, gruntWatchPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
      exit 0
    }
  [startSinatraPid, gruntWatchPid].each { |pid| Process.wait(pid) }
end