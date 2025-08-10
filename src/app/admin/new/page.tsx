"use client";

import React, { useState } from "react";

type RecipeForm = {
  name: string;
  image_url: string;
  description: string;
  time: string;
  ingredients: Array<string>;
  steps: Array<string>;
  published: boolean;
};

function splitLines(s: string) {
  return s
    .split(/\r?\n/)
    .map((x) => x.trim())
    .filter(Boolean);
}

export default function NewRecipePage() {
  const [form, setForm] = useState<RecipeForm>({
    name: "",
    image_url: "",
    description: "",
    time: "",
    ingredients: [],
    steps: [],
    published: true,
  });

  const [ingredientsText, setIngredientsText] = useState("");
  const [stepsText, setStepsText] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<null | {
    type: "ok" | "error";
    text: string;
  }>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    const payload = {
      name: form.name.trim(),
      image_url: form.image_url.trim(),
      description: splitLines(form.description),
      time: form.time.trim(),
      ingredients: form.ingredients,
      steps: form.steps,
      published: form.published,
    };

    if (
      !payload.name ||
      payload.ingredients.length === 0 ||
      payload.steps.length === 0
    ) {
      setSubmitting(false);
      setMessage({
        type: "error",
        text: "Nombre, ingredientes y pasos son obligatorios.",
      });
      return;
    }

    try {
      const res = await fetch("/api/admin/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || `Error ${res.status}`);
      }

      setMessage({ type: "ok", text: "Receta creada correctamente 🎉" });
      setForm({
        name: "",
        image_url: "",
        description: "",
        time: "",
        ingredients: [],
        steps: [],
        published: true,
      });
      setIngredientsText("");
      setStepsText("");
    } catch (err: unknown) {
      let errorMessage = "No se pudo crear la receta";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Añadir receta</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nombre *</label>
          <input
            className="w-full rounded border px-3 py-2"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Croquetas de jamón"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            URL de imagen
          </label>
          <input
            className="w-full rounded border px-3 py-2"
            value={form.image_url}
            onChange={(e) =>
              setForm((f) => ({ ...f, image_url: e.target.value }))
            }
            placeholder="https://..."
          />
          <p className="text-xs text-gray-500 mt-1">
            Tip: más adelante pondremos subida directa a Cloudinary; por ahora
            puedes pegar una URL.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Descripción (una línea por párrafo)
          </label>
          <textarea
            className="w-full rounded border px-3 py-2 min-h-[80px]"
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
            placeholder="Texto breve..."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium mb-1">Tiempo</label>
            <input
              className="w-full rounded border px-3 py-2"
              value={form.time}
              onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
              placeholder="30"
            />
          </div>
          <div className="sm:col-span-1 flex items-center gap-2">
            <input
              id="published"
              type="checkbox"
              className="h-4 w-4"
              checked={form.published}
              onChange={(e) =>
                setForm((f) => ({ ...f, published: e.target.checked }))
              }
            />
            <label htmlFor="published" className="text-sm">
              Publicada
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Ingredientes * (uno por línea)
          </label>
          <textarea
            className="w-full rounded border px-3 py-2 min-h-[120px]"
            value={ingredientsText}
            onChange={(e) => {
              setIngredientsText(e.target.value);
              setForm((f) => ({
                ...f,
                ingredients: splitLines(e.target.value),
              }));
            }}
            placeholder={`Harina\nHuevo\nLeche`}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Pasos * (uno por línea)
          </label>
          <textarea
            className="w-full rounded border px-3 py-2 min-h-[140px]"
            value={stepsText}
            onChange={(e) => {
              setStepsText(e.target.value);
              setForm((f) => ({ ...f, steps: splitLines(e.target.value) }));
            }}
            placeholder={`Prepara la bechamel...\nAñade jamón...\nFríe hasta dorar.`}
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="rounded bg-black text-white px-4 py-2 disabled:opacity-50"
        >
          {submitting ? "Guardando..." : "Guardar receta"}
        </button>

        {message && (
          <p
            className={`mt-2 text-sm ${
              message.type === "ok" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </div>
  );
}
