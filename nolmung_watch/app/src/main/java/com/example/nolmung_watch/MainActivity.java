package com.example.nolmung_watch;

import android.app.Activity;
import android.os.Bundle;
import android.view.WindowMetrics;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.wear.widget.WearableLinearLayoutManager;
import androidx.wear.widget.WearableRecyclerView;

import com.example.nolmung_watch.databinding.ActivityMainBinding;

public class MainActivity extends Activity {

    private TextView mTextView;

    private static double FACTOR = 0.146467;

    private void adjustInset(){
        if(getApplicationContext().getResources().getConfiguration().isScreenRound()) {

        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        adjustInset();

//        binding = ActivityMainBinding.inflate(getLayoutInflater());
//        setContentView(binding.getRoot());
        setContentView(R.layout.activity_main);

        WearableRecyclerView recyclerView = findViewById(R.id.recyclerView);
        WearableLinearLayoutManager layoutManager = new WearableLinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);
        recyclerView.setHasFixedSize(true);
        recyclerView.setEdgeItemsCenteringEnabled(true);
        recyclerView.setCircularScrollingGestureEnabled(true);


        PuppyAdapter adapter = new PuppyAdapter();

        adapter.addItem(new PuppyInfo("구름이", "스피츠", "84"));
        adapter.addItem(new PuppyInfo("지용이", "호모사피엔스", "71"));

        recyclerView.setAdapter(adapter);

    }
}