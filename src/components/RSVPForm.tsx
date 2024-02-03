import React, { useState } from 'react';
import { SectionTitle } from './index';

interface FormData {
  name: string;
  attendance: string;
  message: string;
  photoProfile: any;
}

const RSVPForm = () => {
  const [name, setName] = useState<string>('');
  const [attendance, setAttendance] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [photoProfile, setPhotoProfile] = useState<string | ArrayBuffer | null>(
    null
  );
  const [newSubmittedData, setNewSubmittedData] = useState<FormData[]>([]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAttendanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAttendance(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handlePhotoProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoProfile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newData: FormData = {
      name,
      attendance,
      message,
      photoProfile,
    };

    setNewSubmittedData([...newSubmittedData, newData]);

    // Optional: Clear form fields after submission
    setName('');
    setAttendance('');
    setMessage('');
    setPhotoProfile(null);
  };

  return (
    <div className="rsvp section">
      <SectionTitle id="message">Guest Book</SectionTitle>
      <form data-aos="fade-up" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Nama</label>
              </td>
              <td>:</td>
              <td>
                <input
                  id="name"
                  type="text"
                  value={name}
                  required
                  onChange={handleNameChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="absensi">Kehadiran</label>
              </td>
              <td>:</td>
              <td>
                <select
                  id="absensi"
                  value={attendance}
                  onChange={handleAttendanceChange}
                  required
                >
                  <option value="">Pilih kehadiran</option>
                  <option value="Hadir">Hadir</option>
                  <option value="Tidak Hadir">Tidak Hadir</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Photo Profile</td>
              <td>:</td>
              <td>
                <input type="file" onChange={handlePhotoProfile} />
              </td>
            </tr>
            <tr>
              <td>Pesan</td>
              <td>:</td>
              <td>
                <textarea
                  rows={6}
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn-send" type="submit">
          Kirim
        </button>
      </form>

      <div className="list-attendance" id="message">
        <ul>
          {newSubmittedData.map((data, index) => {
            if (index !== -1) {
              return (
                <li key={index}>
                  <div>
                    <img
                      className="photo-profile"
                      src={
                        data.photoProfile
                          ? String(data.photoProfile)
                          : 'assets/img/profile-man.jpg'
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <div>
                      <strong>{data.name}</strong>
                    </div>
                    <div className="attendance">{data.attendance}</div>
                    <div>{data.message}</div>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default RSVPForm;
