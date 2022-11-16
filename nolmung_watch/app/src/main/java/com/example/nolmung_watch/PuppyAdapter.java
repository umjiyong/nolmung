package com.example.nolmung_watch;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class PuppyAdapter extends RecyclerView.Adapter<PuppyAdapter.ViewHolder> {

    ArrayList<PuppyInfo> items = new ArrayList<>();

    public void addItem(PuppyInfo item) {
        items.add(item);
    }

    public void setItems(ArrayList<PuppyInfo> items) {
        this.items = items;
    }

    public PuppyInfo getitem(int position) {
        return items.get(position);
    }

    public void setItem(int position, PuppyInfo item) {
        items.set(position, item);
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(parent.getContext());
        View itemView = inflater.inflate(R.layout.puppy_item, parent, false);

        return new ViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        PuppyInfo item = items.get(position);
        holder.setItem(item);
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        TextView puppyName;
        TextView breedAge;
        ProgressBar puppyWalkNeeds;

        public ViewHolder(View itemView) {
            super(itemView);

            puppyName = itemView.findViewById(R.id.puppyName);
            breedAge = itemView.findViewById(R.id.breedAge);
            puppyWalkNeeds = itemView.findViewById(R.id.puppyWalkNeeds);
        }

        public void setItem(PuppyInfo item) {
            puppyName.setText(item.getPuppyName());
            breedAge.setText(item.getBreedAge());
            puppyWalkNeeds.setProgress(Integer.parseInt(item.getPuppyWalkNeeds()));
        }
    }
}
