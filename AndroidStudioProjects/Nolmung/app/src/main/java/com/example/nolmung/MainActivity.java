package com.example.nolmung;

import android.app.Activity;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.example.nolmung.databinding.ActivityMainBinding;

import org.w3c.dom.Text;

import java.util.Timer;
import java.util.TimerTask;

public class MainActivity extends Activity {

    private TextView mTextView;
    private TextView walkButtonTextView;
    private TimerTask timerTask;
    private ActivityMainBinding binding;
    private Timer timer = new Timer();
    private Animation blinkAnim;
    private ImageView runningDog;
    private ImageView runningDogStop;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
        mTextView = findViewById(R.id.statusText);
        walkButtonTextView = findViewById(R.id.btnWalk);
        blinkAnim = AnimationUtils.loadAnimation(this,R.anim.blink_animation);
        mTextView.startAnimation(blinkAnim);

//        EditText editTextTime = binding.editTextTime;


        ImageView runningDogStop = (ImageView) findViewById(R.id.gif_image);
        Glide.with(this).load(R.drawable.running_dog_stop).into(runningDogStop);


//        runningDog.


    }
    @Override
    protected void onDestroy()
    {
        timer.cancel();
        super.onDestroy();
    }

    public void clickHandler(View view)
    {
        switch(walkButtonTextView.getText().toString())
        {
            case "산책 시작":
                startTimerTask();
                mTextView.clearAnimation();
                ImageView runningDog = (ImageView) findViewById(R.id.gif_image);
                Glide.with(this).load(R.drawable.running_dog).into(runningDog);


                break;
            case "산책 중지":
                endTimerTask();
                ImageView runningDogStop = (ImageView) findViewById(R.id.gif_image);
                Glide.with(this).load(R.drawable.running_dog_stop).into(runningDogStop);
                break;
        }
    }

    private void startTimerTask()
    {


        timerTask = new TimerTask()
        {
            int count = -1;

            @Override
            public void run()
            {
                count++;
                mTextView.post(new Runnable() {
                    @Override
                    public void run() {
                        mTextView.setText(count/60 +" 분  " + count%60  + " 초");
                        walkButtonTextView.setText("산책 중지");
                    }
                });
            }
        };
        timer.schedule(timerTask,0 ,1000);
    }

    private void endTimerTask()
    {
        if(timerTask != null)
        {
//            mTextView.setText("0 초");
            walkButtonTextView.setText("산책 시작");
            timerTask.cancel();
            timerTask = null;
        }
    }

}