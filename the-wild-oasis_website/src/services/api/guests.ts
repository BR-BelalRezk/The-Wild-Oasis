export async function getGuest(email: string) {
  const { data } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function createGuest(newGuest: any) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}

export async function updateGuest(id: number, updatedFields: any) {
  const { data, error } = await supabase
    .from("guests")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }

  return data;
}
