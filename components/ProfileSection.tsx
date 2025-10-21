import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileSection() {
  return (
    <>
      {/* Header con color sólido rosa pastel */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MI APP PERSONAL</Text>
      </View>

      {/* Avatar circular */}
      <View style={styles.avatarContainer}>
        <Image source={require("../img/ana.jpg")} style={styles.avatar} />
      </View>

      {/* Nombre y profesión */}
      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>Ana Sanchez</Text>
        <Text style={styles.profesion}>Desarrolladora</Text>
      </View>

      {/* Info de contacto */}
      <View style={styles.contactCard}>
        <View style={styles.contactItem}>
          <Text style={styles.contactEmoji}>📧</Text>
          <Text style={styles.contactText}>anasanchezrivera62@gmail.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactEmoji}>📍</Text>
          <Text style={styles.contactText}>Bogotá, Colombia</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactEmoji}>🔗</Text>
          <Text style={styles.contactText}>https://github.com/AnaDev29</Text>
        </View>
      </View>

      {/* Sobre Mí */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sobre Mí</Text>
        </View>
        <Text style={styles.bioText}>
          Me apasiona el análisis y desarrollo de aplicaciones web. Me
          especializo en crear soluciones centradas en el usuario, enfocándome
          en ofrecer experiencias más eficientes, intuitivas y atractivas.
          Utilizo lo mejor de la tecnología disponible, siempre buscando innovar
          y generar nuevas oportunidades de crecimiento.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#ffd6e8",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d4bff",
    letterSpacing: 2,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: -60,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "#fff",
  },
  infoContainer: {
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 20,
  },
  nombre: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2d4bff",
    marginBottom: 5,
  },
  profesion: {
    fontSize: 16,
    color: "#6b5f9f",
    fontWeight: "500",
  },
  contactCard: {
    backgroundColor: "#fff7fb",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    padding: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  contactEmoji: {
    fontSize: 20,
    marginRight: 12,
  },
  contactText: {
    fontSize: 15,
    color: "#000",
    fontWeight: "500",
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  sectionHeader: {
    borderLeftWidth: 4,
    borderLeftColor: "#ff7ab6",
    paddingLeft: 12,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2748ff",
  },
  bioText: {
    fontSize: 15,
    color: "#4a5568",
    lineHeight: 24,
    textAlign: "justify",
  },
});
