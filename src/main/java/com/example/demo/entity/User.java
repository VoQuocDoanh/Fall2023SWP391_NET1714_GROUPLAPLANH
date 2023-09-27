//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(
        name = "User"
)
public class User {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long Id;
    @Column
    private String username;
    @Column
    private String pass;
    @Column
    private String fullName;
    @Column
    private String mail;
    @Column
    private String roleID;
    @Column
    private int status;
    @Column
    private String address;
    @Column
    private String phoneNumber;
    @OneToMany(
            mappedBy = "userName"
    )
    @JsonIgnore
    @JsonInclude(Include.NON_NULL)
    private List<com.example.demo.entity.Beat> beats = new ArrayList();
    @OneToMany(
            mappedBy = "userOrder"
    )
    @JsonIgnore
    @JsonInclude(Include.NON_NULL)
    private List<com.example.demo.entity.Order> orders = new ArrayList();
    @OneToMany(
            mappedBy = "userUploadSong"
    )
    @JsonIgnore
    @JsonInclude(Include.NON_NULL)
    private List<com.example.demo.entity.Song> songs = new ArrayList();
    @OneToMany(
            mappedBy = "userFeedback"
    )
    @JsonIgnore
    @JsonInclude(Include.NON_NULL)
    private List<com.example.demo.entity.FeedbackSong> feedbackSongs = new ArrayList();
    @OneToMany(
            mappedBy = "userCollection"
    )
    @JsonIgnore
    @JsonInclude(Include.NON_NULL)
    private List<com.example.demo.entity.ChordCollection> chordCollections = new ArrayList();

    public User(String username, String pass, String fullName, String mail, String roleID, int status, String address, String phoneNumber) {
        this.username = username;
        this.pass = pass;
        this.fullName = fullName;
        this.mail = mail;
        this.roleID = roleID;
        this.status = status;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    public User(String username, String encode, String fullName, String mail, String roleID, int status) {
    }

    public Long getId() {
        return this.Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPass() {
        return this.pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getFullName() {
        return this.fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getMail() {
        return this.mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getRoleID() {
        return this.roleID;
    }

    public void setRoleID(String roleID) {
        this.roleID = roleID;
    }

    public int getStatus() {
        return this.status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public User() {
    }

    public String toString() {
        return "User{Id=" + this.Id + ", username='" + this.username + "', pass='" + this.pass + "', fullName='" + this.fullName + "', mail='" + this.mail + "', roleID='" + this.roleID + "', status=" + this.status + ", address='" + this.address + "', phoneNumber='" + this.phoneNumber + "'}";
    }

    public List<com.example.demo.entity.Beat> getBeats() {
        return this.beats;
    }

    public List<com.example.demo.entity.Order> getOrders() {
        return this.orders;
    }

    public List<com.example.demo.entity.Song> getSongs() {
        return this.songs;
    }

    public List<com.example.demo.entity.FeedbackSong> getFeedbackSongs() {
        return this.feedbackSongs;
    }

    public List<com.example.demo.entity.ChordCollection> getChordCollections() {
        return this.chordCollections;
    }

    @JsonIgnore
    public void setBeats(final List<Beat> beats) {
        this.beats = beats;
    }

    @JsonIgnore
    public void setOrders(final List<Order> orders) {
        this.orders = orders;
    }

    @JsonIgnore
    public void setSongs(final List<Song> songs) {
        this.songs = songs;
    }

    @JsonIgnore
    public void setFeedbackSongs(final List<FeedbackSong> feedbackSongs) {
        this.feedbackSongs = feedbackSongs;
    }

    @JsonIgnore
    public void setChordCollections(final List<ChordCollection> chordCollections) {
        this.chordCollections = chordCollections;
    }

    


}
