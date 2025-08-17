// Add style override for autofill and focus ring
import "./admin-section-override.css";
import React, { useEffect, useState } from "react";
import { db, auth } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";

const AdminSection = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    tags: "",
    visit: "",
    color: "bg-gradient-hero",
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      if (u) fetchProjects();
    });
    return () => unsubscribe();
  }, []);

  const fetchProjects = async () => {
    const snapshot = await getDocs(collection(db, "projects"));
    setProjects(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "projects"), {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()),
    });
    setForm({
      title: "",
      category: "",
      description: "",
      image: "",
      tags: "",
      visit: "",
      color: "bg-gradient-hero",
    });
    fetchProjects();
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setForm({ ...project, tags: project.tags.join(", ") });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "projects", editingId), {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()),
    });
    setEditingId(null);
    setForm({
      title: "",
      category: "",
      description: "",
      image: "",
      tags: "",
      visit: "",
      color: "bg-gradient-hero",
    });
    fetchProjects();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "projects", id));
    setEditingId(null);
    setForm({
      title: "",
      category: "",
      description: "",
      image: "",
      tags: "",
      visit: "",
      color: "bg-gradient-hero",
    });
    fetchProjects();
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-400">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-white/80 shadow-lg rounded-xl p-8 border border-gray-200"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Admin Login
          </h2>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
            required
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold py-2 rounded-lg shadow"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-400">
      <div className="w-full max-w-4xl bg-white/80 shadow-2xl rounded-2xl p-10 border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Admin: Edit Projects
          </h2>
          <div className="flex gap-2">
            <Button
              onClick={() => window.location.replace("/")}
              className="bg-gradient-to-r from-gray-600 to-gray-400 text-white font-semibold py-2 px-6 rounded-lg shadow"
            >
              Home
            </Button>
            <Button
              onClick={handleLogout}
              className="bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold py-2 px-6 rounded-lg shadow"
            >
              Logout
            </Button>
          </div>
        </div>
        <form
          onSubmit={editingId ? handleUpdate : handleAdd}
          className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
            required
          />
          <input
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
            required
          />
          <input
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50 col-span-1 md:col-span-2"
            required
          />
          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
            required
          />
          <input
            name="tags"
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
            required
          />
          <input
            name="visit"
            placeholder="Visit Link"
            value={form.visit}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
          />
          <select
            name="color"
            value={form.color}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
          >
            <option value="bg-gradient-hero">Hero Gradient</option>
            <option value="bg-gradient-accent">Accent Gradient</option>
          </select>
          <div className="flex gap-2 col-span-1 md:col-span-2">
            <Button
              type="submit"
              className="bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold py-2 px-6 rounded-lg shadow"
            >
              {editingId ? "Update Project" : "Add Project"}
            </Button>
            {editingId && (
              <Button
                type="button"
                className="bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg shadow"
                onClick={() => {
                  setEditingId(null);
                  setForm({
                    title: "",
                    category: "",
                    description: "",
                    image: "",
                    tags: "",
                    visit: "",
                    color: "bg-gradient-hero",
                  });
                }}
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Projects
          </h3>
          {projects.length === 0 && (
            <p className="text-gray-500">No projects found.</p>
          )}
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between shadow-sm hover:shadow-md transition"
              >
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-lg text-gray-700 truncate">
                    {project.title}
                  </div>
                  <div className="text-sm text-gray-500 truncate">
                    {project.category}
                  </div>
                  <div className="text-xs text-gray-400 truncate">
                    {project.tags.join(", ")}
                  </div>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold px-4 py-1 rounded-lg shadow"
                    onClick={() => handleEdit(project)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="px-4 py-1 rounded-lg shadow"
                    onClick={() => handleDelete(project.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSection;
