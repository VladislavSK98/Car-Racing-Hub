const Track = require("../models/trackModel");

exports.getAllTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.json(tracks);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getTrackById = async (req, res) => {
  try {
    const track = await Track.findById(req.params.id).populate("fastestLaps.user fastestLaps.car");
    if (!track) {
      return res.status(404).json({ error: "Track not found" });
    }
    res.json(track);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.createTrack = async (req, res) => {
  try {
    const newTrack = new Track(req.body);
    await newTrack.save();
    res.status(201).json(newTrack);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
};

exports.updateTrack = async (req, res) => {
  try {
    const updatedTrack = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTrack);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
};

exports.deleteTrack = async (req, res) => {
  try {
    await Track.findByIdAndDelete(req.params.id);
    res.json({ message: "Track deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
