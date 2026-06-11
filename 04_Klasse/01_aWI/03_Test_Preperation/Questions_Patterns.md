# Advanced OOP Architecture: Code Analysis Tasks

*Theme: Audio Production Workstation (DAW) Design*

## Task 1: Implementing the Observer Pattern
Below is a Java class representing an audio track. Currently, it is tightly coupled to the User Interface. Whenever the volume fader changes, the `AudioTrack` directly updates specific UI components. This makes it impossible to add new views (like a mobile remote app or a hardware MIDI controller) without modifying the `AudioTrack` class.

```java
public class AudioTrack {
    private double volumeLevel;
    private MixerPanelUI mixerUI;
    private ArrangementViewUI arrangementUI;

    public AudioTrack(MixerPanelUI mixerUI, ArrangementViewUI arrangementUI) {
        this.mixerUI = mixerUI;
        this.arrangementUI = arrangementUI;
    }

    public void setVolume(double newVolume) {
        this.volumeLevel = newVolume;
        // Tightly coupled UI updates
        mixerUI.updateFaderVisuals(this.volumeLevel);
        arrangementUI.updateWaveformHeight(this.volumeLevel);
    }
}
```

**Your Task:** Rewrite this architecture using the **Observer Pattern**. Show the necessary interfaces and the updated `AudioTrack` class so that it can notify any number of listeners without knowing what those listeners are.

---

## Task 2: Implementing the Singleton Pattern
The `SoundCardManager` is responsible for taking the final audio buffer and sending it to the physical speakers. It is critical that exactly *one* instance of this manager exists. Multiple instances will try to seize control of the audio drivers simultaneously, causing the software to crash. Currently, any class can instantiate it.

```java
public class SoundCardManager {
    private boolean isConnected;

    public SoundCardManager() {
        // Expensive hardware initialization logic
        connectToDrivers();
    }

    private void connectToDrivers() {
        this.isConnected = true;
        System.out.println("Hardware driver locked.");
    }
    
    public void pushBuffer(byte[] audioData) {
        // Sends data to speakers
    }
}
```

**Your Task:** Refactor this class into a **Thread-Safe Singleton**. Ensure that no outside class can use the `new` keyword, and provide the global access point for the application to get the single instance.

---

## Task 3: Implementing the Factory Pattern
Below is a snippet from the software's `ProjectManager`. When a user wants to create a new track, the manager uses a large `if/else` block. This violates the Single Responsibility Principle, as the `ProjectManager` should only manage the project state, not handle the complex creation logic of tracks.

```java
public class ProjectManager {
    private List<Track> timeline = new ArrayList<>();

    public void addTrackToProject(String trackType) {
        Track newTrack = null;
        
        if (trackType.equals("AUDIO")) {
            newTrack = new AudioTrack();
            newTrack.armForRecording();
        } else if (trackType.equals("MIDI")) {
            newTrack = new MidiTrack();
            newTrack.loadDefaultSynthesizer();
        } else if (trackType.equals("VIDEO")) {
            newTrack = new VideoTrack();
        }
        
        if (newTrack != null) {
            timeline.add(newTrack);
        }
    }
}
```

**Your Task:** Extract the instantiation logic using the **Factory Pattern** (either a Simple Factory or Factory Method is acceptable). Write the Factory class/method and show how the `ProjectManager` is updated to use it.