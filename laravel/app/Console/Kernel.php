<?php

namespace App\Console;

use App\Console\Closures\SyncArticles;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        if(config('app.env') == 'production')
        {
            $schedule->call(new SyncArticles)->dailyAt('05:00')->name('Syncing articles from REST API');
        }
        else
        {
            $schedule->call(new SyncArticles)->everyMinute()->name('Syncing articles from REST API')
                ->evenInMaintenanceMode();
        }
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
